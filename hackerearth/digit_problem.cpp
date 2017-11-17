// Problem # 15
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/digit-problem/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;

int main(int argc, char const *argv[]) {
  string x;
  lli k;
  cin >> x;
  cin >> k;
  for (size_t i = 0; i < x.size() && k; i++) {
    if (x[i] != '9') {
      x[i] = '9';
      k--;
    }
  }
  cout << x << '\n';
  return 0;
}
