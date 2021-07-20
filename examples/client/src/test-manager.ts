import { asyncTestType, syncTestType } from "./types.ts";
export class TestManager {
  succesTestCount = 0;
  failedTestCount = 0;

  helperCatchEcho(error: unknown, TO: syncTestType | asyncTestType) {
    this.failedTestCount++;
    console.log(`${TO.testName}`);
    console.error("test Failed");
    console.log({ error });
  }

  runSyncTest(TO: syncTestType) {
    //TO for test object
    try {
      const b = TO.fn();
      if (b) {
        this.succesTestCount++;
        console.log(TO.testName);
        console.log("test succes");
      } else {
        this.helperCatchEcho("", TO);
      }
    } catch (error) {
      this.helperCatchEcho(error, TO);
    }
    this.bilan();
  }

  async runAsyyncTest(TO: asyncTestType) {
    //TO for test object

    try {
      const b = await TO.fn();
      if (b) {
        this.succesTestCount++;
        console.log(TO.testName);
        console.log("test succes");
      } else {
        this.helperCatchEcho("", TO);
      }
    } catch (error) {
      this.helperCatchEcho(error, TO);
    }
    this.bilan();
    console.log("-------------------------------------------------------");
  }

  bilan() {
    console.log(
      `${this.failedTestCount} tests is Failed | ${this.succesTestCount} tests is success`,
    );
  }
}
