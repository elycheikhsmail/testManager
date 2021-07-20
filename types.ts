export interface syncTestType {
  testName: string;
  fn(): boolean;
}

export interface asyncTestType {
  testName: string;
  fn(): Promise<boolean>;
}
 