#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void swap(char *a, char *b) { char tmp = *a;
    *a = *b;
    *b = tmp;
}

unsigned long long to_decimal(int length, char *places) {
    unsigned long long c = 0;
    for (int i = length - 1; i >= 0; i--) {
        c = c * 10 + places[i];
    }

    return c;
}

unsigned long long next_smaller_number(unsigned long long n) {
    // get number of places
    int length = 0;
    unsigned long long c = n;
    while (c > 0) {
        c /= 10;
        length++;
    }

    // create char array to hold decimal places
    char *places = malloc(sizeof(char)*(length+1));
    char *p = places;

    // store places in array
    c = n;
    while (c > 0) {
        char place = c % 10;
        *p++ = place;
        c /= 10;
    }

    // find first occurence of left > right
    int i = 1;
    char curr;
    char last = places[0];
    while (i < length) {
        curr = places[i];
        if (curr > last) {
            break;
        }
        last = curr;
        i++;
    }

    // already lowest value
    if (i == length) {
        return -1;
    }

    // find greatest value less than places[i] in places[0:i]
    int value = i-1;
    char left = places[i];
    char right = places[i-1];
    for (int j = 0; j < i; j++) {
        char next = places[j];
        if (next < left && next > right) {
            value = j;
            right = next;
        }
    }

    // make swap
    swap(&places[i], &places[value]);
    if (places[length - 1] == 0) {
        return -1;
    }

    // sort values up to ith in ascending order
    int pos = 0;
    while (pos < i) {
        if (pos == 0 || places[pos] >= places[pos-1]) {
            pos += 1;
        } else {
            swap(&places[pos], &places[pos-1]);
            pos -= 1;
        }
    }

    c = to_decimal(length, places);
    free(places);
    return c;
}

/*
int main() {
    printf("Sample Test Cases\n");
    printf("%lld\n", next_smaller_number(29009));
    printf("%lld\n", next_smaller_number(1027));
    printf("%lld\n", next_smaller_number(59884848483559));
    printf("%lld\n", next_smaller_number(907));
    printf("%lld\n", next_smaller_number(917));
    printf("%lld\n", next_smaller_number(123917));
    printf("%lld\n", next_smaller_number(123456798));
    printf("%lld\n", next_smaller_number(123456789));
    printf("%lld\n", next_smaller_number(1994232599));
    return 0;
}
*/
