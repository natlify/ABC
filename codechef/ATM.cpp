// Problem #3
// Desc : https://www.codechef.com/problems/HS08TEST

#include <iostream>
#include <stdio.h>

using namespace std;
double c;
int a;

int main(int argc, char const *argv[]) {
  cin >> a >> c;
  printf("%.2f\n", (((a % 5 == 0) && a <= (c - 0.5)) ? (c - a - 0.5) : c));
  return 0;
}
