export class Meta {
   total: number;
   count: number;
   per_page: number;
   current_page: number;
   total_pages: number;
   pagination:any;
   links:any;

   constructor() {
    this.total = 0;
    this.count = 0;
    this.per_page = 0;
    this.current_page = 0;
    this.total_pages = 0;
   }
}