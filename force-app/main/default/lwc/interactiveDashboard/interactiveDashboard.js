import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { loadScript } from 'lightning/platformResourceLoader';

const CHARTJS = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.0.0-alpha.2/chart.min.js';

export default class InteractiveDashboard extends LightningElement {
    @track accounts = [];
    @track filteredAccounts = [];
    @track selectedAccount = null;
    @track selectedIndustry = '';
    @track selectedSegment = '';
    @track searchKey = '';

    industryOptions = [
        { label: 'Todos', value: '' },
        { label: 'Technology', value: 'Technology' },
        { label: 'Finance', value: 'Finance' },
        { label: 'Healthcare', value: 'Healthcare' },
    ];

    segmentOptions = [
        { label: 'Todos', value: '' },
        { label: 'Enterprise', value: 'Enterprise' },
        { label: 'SMB', value: 'SMB' },
        { label: 'Mid-Market', value: 'Mid-Market' },
    ];

    columns = [
        { label: 'Nombre', fieldName: 'Name', type: 'text' },
        { label: 'Propietario', fieldName: 'OwnerId', type: 'text' },
        { label: 'Teléfono', fieldName: 'Phone', type: 'phone' },
        { label: 'Industria', fieldName: 'Industry', type: 'text' },
        { label: 'Ingresos', fieldName: 'AnnualRevenue', type: 'currency' },
        { type: 'button', typeAttributes: { label: 'Ver Detalles', name: 'view_details' } },
    ];

    renderedCallback() {
        if (!this.chartInitialized) {
            this.chartInitialized = true;
            loadScript(this, CHARTJS)
                .then(() => this.initializeCharts())
                .catch(error => console.error('Error loading ChartJS', error));
        }
    }

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.filteredAccounts = data;
            this.updateCharts();
        } else if (error) {
            console.error('Error fetching accounts', error);
        }
    }

    handleSearch(event) {
        this.searchKey = event.target.value.toLowerCase();
        this.filterAccounts();
    }

    handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
        this.filterAccounts();
    }

    handleSegmentChange(event) {
        this.selectedSegment = event.detail.value;
        this.filterAccounts();
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        if (actionName === 'view_details') {
            this.selectedAccount = row;
        }
    }

    filterAccounts() {
        this.filteredAccounts = this.accounts.filter(account => {
            return (
                (this.selectedIndustry === '' || account.Industry === this.selectedIndustry) &&
                (this.selectedSegment === '' || account.Segmento__c === this.selectedSegment) &&
                (account.Name.toLowerCase().includes(this.searchKey))
            );
        });
        this.updateCharts();
    }

    initializeCharts() {
        const ctxIndustry = this.template.querySelector('[data-id="industryChart"]').getContext('2d');
        const ctxSegment = this.template.querySelector('[data-id="segmentChart"]').getContext('2d');

        this.industryChart = new Chart(ctxIndustry, {
            type: 'bar',
            data: { labels: [], datasets: [] },
        });

        this.segmentChart = new Chart(ctxSegment, {
            type: 'pie',
            data: { labels: [], datasets: [] },
        });

        this.updateCharts();
    }

    updateCharts() {
        const industryData = {};
        const segmentData = {};

        this.filteredAccounts.forEach(account => {
            industryData[account.Industry] = (industryData[account.Industry] || 0) + 1;
            segmentData[account.Segmento__c] = (segmentData[account.Segmento__c] || 0) + 1;
        });

        this.industryChart.data = {
            labels: Object.keys(industryData),
            datasets: [{ data: Object.values(industryData), backgroundColor: ['#1abc9c', '#3498db', '#9b59b6'] }],
        };

        this.segmentChart.data = {
            labels: Object.keys(segmentData),
            datasets: [{ data: Object.values(segmentData), backgroundColor: ['#e74c3c', '#f1c40f', '#2ecc71'] }],
        };

        this.industryChart.update();
        this.segmentChart.update();
    }
}
