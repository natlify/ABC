// Problem #8
// https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/algorithm/white-space-3/

#include <bits/stdc++.h>
#include <string>
using namespace std;
int s = 0;
string c;
int main(int argc, char const *argv[]) {
  int i = 0;
  getline(cin, c);
  while (c[i] != '\0') {
    if (c[i++] == ' ')
      s++;
  }
  cout << s;
  return 0;
}
