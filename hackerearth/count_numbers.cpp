// Problem #6
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/count-numbers-46/

#include <bits/stdc++.h>
using namespace std;

bool isd(char c) { return (c >= '0' && c <= '9') ? true : false; }
int t, n;
string s;
int main(int argc, char const *argv[]) {
  cin >> t;
  while (t--) {
    cin >> n;
    char c, prev = '@';
    int count = 0;
    for (int i = 0; i <= n; i++) {
      c = getchar();
      if (isd(c) && !isd(prev)) {
        count++;
      }
      prev = c;
    }
    cout << count << '\n';
  }
  return 0;
}
