import org.junit.After;
import org.junit.Assert;
import org.junit.Before;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator Calculator;
    double result;

    @Before
    public void befTest(){
        Calculator = new Calculator();
    }

    @After
    public void aftTest()
    {
        Calculator = null;
    }

    @org.junit.Test
    public void calcSumOfPositiveIntegers() {

        Assert.assertEquals(7, Calculator.calcSum(2,5));
    }

    @org.junit.Test
    public void calcSumOfZeroAndPositiveInteger() {

        Assert.assertEquals(5, Calculator.calcSum(0,5));
    }

    @org.junit.Test
    public void calcSumOfDoubleAndInteger() {
        result = Calculator.calcSumDouble(1.5, 5);
        Assert.assertEquals(6.5, result, 0.001);
    }

    @org.junit.Test
    public void calcSumOfDoubleNumbers() {
        result = Calculator.calcSumDouble(1.5, 1.75);
        Assert.assertEquals(3.25, result, 0.001);
    }

    @org.junit.Test
    public void calcSumOfNegativeNumberAndZero() {

        Assert.assertEquals(-5, Calculator.calcSum(-5,0));
    }

    @org.junit.Test
    public void calcSumOfNegativeAndPositiveNumbers() {

        Assert.assertEquals(0, Calculator.calcSum(-5,5));
    }

    @org.junit.Test
    public void calcSumOfNegativeIntegers() {

        Assert.assertEquals(-10, Calculator.calcSum(-5,-5));
    }

    @org.junit.Test
    public void calcSubOfIntegerFromZero() {

        Assert.assertEquals(-3, Calculator.calcSub(0,3));
    }

    @org.junit.Test
    public void calcSubOfZeroFromInteger() {

        Assert.assertEquals(3, Calculator.calcSub(3,0));
    }

    @org.junit.Test
    public void calcSubOfNegativeNumberFromZero() {

        Assert.assertEquals(3, Calculator.calcSub(0,-3));
    }

    @org.junit.Test
    public void calcSubOfNegativeDoubleNumbers() {
        result = Calculator.calcSubDouble(-1.5, -5.5);
        Assert.assertEquals(4, result, 0.001);
    }

    @org.junit.Test
    public void calcMultByZero() {

        Assert.assertEquals(0, Calculator.calcMult(5,0));
    }

    @org.junit.Test
    public void calcMultOfNegativeDoubleNumbers() {
        result = Calculator.calcMultDouble(-1.5, -1.5);
        Assert.assertEquals(2.25, result, 0.001);
    }

    @org.junit.Test
    public void calcMultOfNegativeByZero() {

        Assert.assertEquals(0, Calculator.calcMult(-5,0));
    }

    @org.junit.Test
    public void calcDivOfIntegers() {
        result = Calculator.calcDiv(1000, 1000000);
        Assert.assertEquals(0.001, result, 0.001);
    }

    @org.junit.Test
    public void calcDivOfNegativeIntegers() {
        result = Calculator.calcDiv(-1000, -1000);
        Assert.assertEquals(1, result, 0.001);
    }

    @org.junit.Test
    public void divideByZero() {
        result = Calculator.calcDiv(5, 0);
        Assert.assertEquals(Double.POSITIVE_INFINITY, result, 0.001);
    }

    @org.junit.Test
    public void calcPercent() {
        result = Calculator.calcPercent(800, 8);
        Assert.assertEquals(64, result, 0.001);
    }
}
