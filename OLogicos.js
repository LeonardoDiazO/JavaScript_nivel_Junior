num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;
//Operacion combinada
// numero1 es nenor que numero2 || numero 2 es menor que numero3
// y tengo el contrario del numero 1
// y numero5 es distinto de numero3

op = (num1 < num2 || num2 < num3) && (!num1 && num5 != num3);
document.write(op);

op2 = (true || true) && (!true && true != false);
document.write(op2);

//Oper      true            true               true              false 
op3 = (num5 > num2 && num4 < nume3) || (!(num1 === num2) || num3 != num3);
document.write(op3);

