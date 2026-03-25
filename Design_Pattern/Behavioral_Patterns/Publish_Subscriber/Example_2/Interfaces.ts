export interface Customer {
  receiveEmail(message: string): Promise<void>;
}
