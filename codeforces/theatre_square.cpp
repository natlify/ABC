// Problem #1
// http://codeforces.com/contest/1/problem/A

#include <iostream>
#include <math.h>

using namespace std;
long double n, m, a;

int main(int argc, char const *argv[]) {
  cin >> n >> m >> a;
  cout << (long long)ceil(n / a) * (long long)ceil(m / a);
  return 0;
}
