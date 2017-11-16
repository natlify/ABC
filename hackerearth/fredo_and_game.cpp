// Problem # 11
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/fredo-and-game/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;
lli n, a, arr[100000], t;
int main(int argc, char const *argv[]) {
  cin >> t;
  while (t--) {
    cin >> a >> n;
    int i;
    for (i = 0; i < n; i++) {
      cin >> arr[i];
      if (a <= 0) {
        break;
      }
      if (arr[i] == 1) {
        a += 2;
      } else if (arr[i] == 0) {
        a -= 1;
      }
    }
    if (a > 0)
      cout << "Yes " << a << '\n';
    else
      cout << "No " << i << '\n';
  }

  return 0;
}
