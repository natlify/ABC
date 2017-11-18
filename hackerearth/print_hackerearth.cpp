// Problem #16
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/print-hackerearth/

#include <bits/stdc++.h>
typedef unsigned long long int lli;
using namespace std;

// H A C K E R E A R T H

int main(int argc, char const *argv[]) {
  lli n, h, a, c, k, e, r, t;
  h = a = c = k = e = r = t = 0;
  char ch;
  cin >> n;
  for (size_t i = 0; i < n; i++) {
    /* code */
    cin >> ch;
    switch (ch) {
    case 'h':
      h++;
      break;
    case 'a':
      a++;
      break;
    case 'c':
      c++;
      break;
    case 'k':
      k++;
      break;
    case 'e':
      e++;
      break;
    case 'r':
      r++;
      break;
    case 't':
      t++;
      break;
    }
  }
  h /= 2;
  a /= 2;
  e /= 2;
  r /= 2;
  lli min = n;
  if (h <= min) {
    min = h;
  }
  if (a <= min) {
    min = a;
  }
  if (c <= min) {
    min = c;
  }
  if (k <= min) {
    min = k;
  }
  if (e <= min) {
    min = e;
  }
  if (r <= min) {
    min = r;
  }
  if (t <= min) {
    min = t;
  }
  cout << min;
  return 0;
}
