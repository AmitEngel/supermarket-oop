import { Iperson } from "./Iperson";
export class StaffMember implements Iperson {
    role;
    constructor(role: string) {
        this.role = role;
    }
}