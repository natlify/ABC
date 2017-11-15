// Problem #6
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/count-numbers-46/

#include <ctype.h>
#include <iostream>
#include <stdio.h>

typedef long long int lli;
using namespace std;

lli t, n;
string s;

int main(int argc, char const *argv[]) {

  cin >> t;
  while (t--) {
    cin >> n;
    char c, prev = '@';
    int count = 0;
    for (int i = 0; i <= n; i++) {
      c = getchar();
      if (isdigit(c) && !isdigit(prev)) {
        count++;
      }
      prev = c;
    }
    cout << count << '\n';
  }
  return 0;
}
