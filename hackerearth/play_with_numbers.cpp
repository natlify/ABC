// Problem #13
// https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/play-with-numbers-2/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;

int main(int argc, char const *argv[]) {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  lli l, r, n, q, a[1000000];
  cin >> n >> q;
  for (int i = 1; i <= n; i++) {
    cin >> a[i];
  }
  while (q--) {
    cin >> l >> r;

    lli sum = 0;
    for (int i = l; i <= r; i++) {
      sum += a[i];
    }
    cout << sum / (r - l + 1) << '\n';
  }
  return 0;
}
