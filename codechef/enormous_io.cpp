// Problem #4
// Desc : https://www.codechef.com/problems/INTEST

#include <iostream>

using namespace std;
long long int n, k, a, v = 0;
int main(int argc, char const *argv[]) {
  cin >> n >> k;
  while (n--) {
    cin >> a;
    !(a % k) ? v++ : v += 0;
  }
  cout << v;
  return 0;
}
