import axios from 'axios';

class GeneralRequestService {
  static instance: GeneralRequestService;
  private httpService;

  constructor() {
    this.httpService = axios;
  }
  static getInstance() {
    if (!GeneralRequestService.instance) {
      GeneralRequestService.instance = new GeneralRequestService();
    }
    return GeneralRequestService.instance;
  }

  async get(endpoint: string) {
    const response = await this.httpService.get(endpoint);
    return response.data;
  }
}

export default GeneralRequestService.getInstance();
