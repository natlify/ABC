// Problem #10
// Desc : http://www.spoj.com/problems/PRIME1/
// Sieve of Eratosthenes

#include <bits/stdc++.h>
#define ARRAY_SIZE 1000000000
typedef unsigned long long int lli;
using namespace std;
lli n, m, t;
bool prime[ARRAY_SIZE] = {0};
void sieve(lli n) {
  lli p = 2;
  while (1) {
    lli i = 2;
    while (p * i <= n) {
      prime[p * i] = true;
      i++;
    }
    p++;
    while (prime[p] != false) {
      p++;
      if (p >= n)
        return;
    }
  }
}

int main(int argc, char const *argv[]) {
  cin >> t;
  while (t--) {
    cin >> m;
    cin >> n;
    sieve(n);
    for (size_t i = m; i < n; i++) {
      if (prime[i] == false && i > 1)
        cout << i << endl;
    }
    cout << endl;
  }
  return 0;
}
