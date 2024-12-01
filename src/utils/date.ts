export function shortDate(date:Date){
   return new Intl.DateTimeFormat('en-GB',{
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date))
}