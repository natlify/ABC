// Problem #7
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/array-insert/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;
lli n, q, x, y, z, *a;

int main(int argc, char const *argv[]) {
  cin >> n >> q;
  a = new lli[n];
  int i = 0;
  while (n--) {
    cin >> a[i++];
  }
  while (q--) {
    cin >> z >> x >> y;
    switch (z) {
    case 1:
      a[x] = y;
      break;
    case 2:
      if (x > y) {
        cout << -1 << '\n';
        break;
      }
      lli sum = 0;
      while (x <= y) {
        sum += a[x++];
      }
      cout << sum << '\n';
      break;
    }
  }
  return 0;
}
