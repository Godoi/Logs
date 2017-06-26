export class Change {
    _id: string;
    message: string;
    level: number;
    level_name: string;
    channel: string;
    username: string;
    user_id: string;
    table: string;
    operation: string;
    columns: any;
    meta: any;
    pagination:any;
    constructor() {
        this._id = '';
        this.message = '';
        this.level = 0;
        this.level_name = '';
        this.channel = '';
        this.username = '';
        this.user_id = '';
        this.table = '';
        this.operation = '';
    }
}