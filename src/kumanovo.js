/**
 * Created by gkopevski on 4/7/2016.
 */

(function () {
    /**
     * Memoization function for prime numbers (reference from Secrets of javascript ninja)
     * @param value
     * @returns {*}
     */
    function isPrime(value) {
        if (!isPrime.answers) isPrime.answers = {};
        if (isPrime.answers[value] != null) {
            return isPrime.answers[value];
        }
        var prime = value != 1; // 1 can never be prime
        var limit = Math.sqrt(value) + 1 // number is prime if no divisor is found in this limit
        for (var i = 2; i < limit; i++) {
            if (value % i == 0) {
                prime = false;
                break;
            }
        }
        return isPrime.answers[value] = prime;
    }
}());
