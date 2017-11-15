// Problem #7
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/array-insert/

#include <iostream>

using namespace std;
int n, q, x, y, z, *a, i;

int main(int argc, char const *argv[]) {
  cin >> n >> q;
  a = new int[n];
  while (n--) {
    cin >> a[i++];
  }
  while (q--) {
    cin >> z >> x >> y;
    if (z == 1) {
      a[x] = y;
    } else if (z == 2 && x > y) {
      int sum = 0;
      while (x <= y) {
        sum += a[x++];
      }
      cout << sum << '\n';
    } else
      cout << -1 << '\n';
  }
  return 0;
}
