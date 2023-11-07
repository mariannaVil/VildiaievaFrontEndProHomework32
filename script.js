class SuperMath {
    check(obj) {
        this.x = obj.X;
        this.y = obj.Y;
        this.znak = obj.znak;

        this.isValidOperator(this.znak) ? this.calculate() : this.input();
    }

    isValidOperator(znak) {
        return ['+', '-', '/', '*', '%'].includes(znak);
    }

    calculate() {
        switch (this.znak) {
            case '+':
                console.log(this.x + this.y);
                break;
            case '-':
                console.log(this.x - this.y);
                break;
            case '*':
                console.log(this.x * this.y);
                break;
            case '/':
                if (this.y !== 0) {
                    console.log(this.x / this.y);
                } else {
                    console.log("Ділення на нуль неможливе.");
                }
                break;
            case '%':
                console.log(this.x % this.y);
                break;
        }
    }

    input() {
        this.x = +(prompt("Введіть значення X:"));
        this.y = +(prompt("Введіть значення Y:"));
        this.znak = prompt("Введіть операцію (+, -, /, *, %):");

        this.isValidOperator(this.znak) ? this.calculate() : console.log("Введена некоректна операція.");
    }
}

let result = new SuperMath();
let obj = {X: 7, Y: 8, znak: "*"};
result.check(obj);