import { inngest } from "../client";


export const dailySalesReport = inngest.createFunction(
    {
        id: "daily-sales-report",
        name: "Daily sales report"
    },
    { cron: "TZ=America/New_York 0 9 * * *"},
    async ({step}) => {
        console.log("Daily report sent");
        
    }
)

export const abandonedCartRecovery = inngest.createFunction(
    {
        id: "abandoned-cart-report",
        name: "abandoned cart report",
    },
    {cron: "0 */2 * * *"},
    async ({step}) => {
        console.log("Report sent");
        
    }
);