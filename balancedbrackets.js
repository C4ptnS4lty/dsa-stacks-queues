const Stack = require("./stack");

class BalancedBrackets {
   constructor() {
    this.text = new Stack();

    this.fparan = 0;
    this.bparan = 0;

    this.fsquare = 0;
    this.bsquare = 0;

    this.fcurl = 0;
    this.bcurl = 0;
  }

  judge(words) {
    if(words) {
        for (const char of words) {
            this.text.push(char);
        }

        for (const val of this.text) {
            switch (val) {
                case '(':
                    this.fparan += 1;
                    break;
                case ')':
                    this.bparan += 1;
                    break;
                case '[':
                    this.fsquare += 1;
                    break;
                case ']':
                    this.bsquare += 1;
                    break;
                case '{':
                    this.fcurl += 1;
                    break;
                case '}':
                    this.bcurl += 1;
                default:
                    break;
            }
        }

        return(this.fparan == this.bparan && this.fsquare == this.bsquare && this.fcurl == this.bcurl);
    }

    throw new Error('Need some text to judge.')
  }

}