// Problem # 14
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/round-table-killers-b7b93156/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;

int main(int argc, char const *argv[]) {
  lli n, x, k, n1;
  cin >> n >> k >> x;
  n1 = n;
  bool a[1001] = {0};
  while (1) {
    int times = x % k;
    // cout << "Kill these many persons :" << times << endl;
    int i = x + 1;
    if (i > n)
      i = 1;
    while (a[i]) {
      i++;
      if (i > n)
        i = 1;
    }
    while (times) {
      if (!a[i]) {
        a[i] = true;
        // cout << "killing " << i << endl;
        times--;
        n1--;
      }
      i++;
      if (i > n)
        i = 1;
      while (a[i]) {
        i++;
        if (i > n)
          i = 1;
      }
    }
    // cout << "Knife is with " << i << endl;
    x = i;
    if (n1 == 1 || n1 <= x % k) {
      break;
    }
  }
  cout << x << endl;
  return 0;
}
