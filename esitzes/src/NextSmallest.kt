import kotlin.test.assertEquals

object Kata {
    fun nextSmaller(value: Long): Long {
        val valueArray = value.toString().toCharArray()

        for (i in valueArray.size - 1 downTo 0) {
            for (j in i downTo 0) {

                if (j == 0 && valueArray[i] == '0') {
                    continue
                }

                if (Character.getNumericValue(valueArray[j]) > Character.getNumericValue(valueArray[i])) {
                    val tmp = valueArray[i]
                    valueArray[i] = valueArray[j]
                    valueArray[j] = tmp
                    return valueArray.joinToString("").toLong()
                }
            }

        }

        return -1
    }
}

fun main (args: Array<String>) {
    assertEquals(8954726, Kata.nextSmaller(8954762))

    assertEquals(12, Kata.nextSmaller(21))
//    assertEquals(790, Kata.nextSmaller(935));
    assertEquals(513, Kata.nextSmaller(531))
    assertEquals(-1, Kata.nextSmaller(1027))

    assertEquals(414, Kata.nextSmaller(441))
    assertEquals(123456789, Kata.nextSmaller(123456798))
}