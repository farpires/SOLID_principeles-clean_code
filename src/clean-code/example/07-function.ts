/**
 * Limitar a 3 parametros posicionales
 */
/** 
function sendEmail( toWhom:string, from:string, body:string ): boolean {
    return true;
}
*/
interface SendEmailOptions {
    toWhom: string,
    from: string,
    body: string,
    subject: string,
    apikey: string
}

function sendEmail(emailOptions: SendEmailOptions): boolean {
    return true;
}