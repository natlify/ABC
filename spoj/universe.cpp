// Problem #9
// http://www.spoj.com/problems/TEST/

#include <iostream>
using namespace std;

int main() {
  int x;
  while (1) {
    cin >> x;
    if (x == 42)
      break;
    else
      cout << x << '\n';
  }
  return 0;
}
