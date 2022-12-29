/**
 * **Check full documentation here**
 *
 * https://icy-ulna-81b.notion.site/StreamPay-Web-App-Widget-SDK-Wiki-79977d478e714415af90250555b2f983
 *
 * `toCurrency` - Provide crypto ticker for example `STREAM` if you want to lock receiving currency, customer won't be able to change that
 *
 * `toAmount` - Only available if `toCurrency` is provided, you may also lock amount
 *
 * `toWallet` - Only available if `toCurrency` is provided, this wallet will receive all funds
 *
 * `merchantOrderId` - Custom string, your order identifier to help you track orders.
 *
 * `apiKey` - You merchant public key, NOT A SECRET KEY
 *
 * `contractCall` - Data contract method
 */
export interface WidgetParams {
    toCurrency?: string;
    toAmount?: string;
    toWallet?: string;
    merchantOrderId?: string;
    apiKey?: string;
    contractCall?: ContractCall;
}
/**
 * **Check full documentation here**
 *
 * https://icy-ulna-81b.notion.site/StreamPay-Web-App-Widget-SDK-Wiki-79977d478e714415af90250555b2f983
 *
 * `toCurrency` - Provide crypto ticker for example `STREAM` if you want to lock receiving currency, customer won't be able to change that
 *
 * `toAmount` - Only available if `toCurrency` is provided, you may also lock amount
 *
 * `toWallet` - Only available if `toCurrency` is provided, this wallet will receive all funds
 *
 * `merchantOrderId` - Custom string, your order identifier to help you track orders.
 *
 * `apiKey` - You merchant public key, NOT A SECRET KEY
 *
 * `signature` - Signature which proves you own secret key. Always generate signature on back-end and never share secret key with front-end.
 */
export interface SignedWidgetParams extends WidgetParams {
    signature: string;
}
/**
 * **Check full documentation here**
 *
 * https://icy-ulna-81b.notion.site/StreamPay-Web-App-Widget-SDK-Wiki-79977d478e714415af90250555b2f983
 *
 * `method` - Contract method
 *
 * `args` - Arguments for your contract
 */
export interface ContractCall {
    method: string;
    args?: Record<string, string>;
}
