// Problem #5
// Desc : https://www.codechef.com/problems/FCTRL

#include <iostream>
typedef unsigned long long int lli;

using namespace std;
lli f5 = 0, f2 = 0;
lli T, *a, n;
lli factorise(lli x) {
  do {
    lli y = x;
    while (!(x % 5) || !(x % 2)) {
      if (!(x % 5)) {
        f5++;
        x /= 5;
      }
      if (!(x % 2)) {
        f2++;
        x /= 2;
      }
    }
    x = y - 1;
  } while (x != 1);
  return 0;
}

int main(int argc, char const *argv[]) {

  cin >> T;
  n = T;
  a = new lli[T];
  while (T) {
    cin >> a[n - T];
    T--;
  }
  int i = 0;
  while (n) {
    f5 = 0;
    f2 = 0;
    factorise(a[i++]);
    cout << ((f2 <= f5) ? f2 : f5) << '\n';
    n--;
  }
  return 0;
}
