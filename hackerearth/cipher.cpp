// Problem #12
// https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/cipher-1/

#include <bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[]) {
  string s;
  int n;
  cin >> s;
  cin >> n;
  for (size_t i = 0; i < s.size(); i++) {
    char c = s[i];
    if (isupper(c))
      s[i] = (char)(((int)c - 'A' + n) % 26 + 'A');
    else if (islower(c))
      s[i] = (char)(((int)c - 'a' + n) % 26 + 'a');
    else if (isdigit(c))
      s[i] = (char)(((int)c - '0' + n) % 10 + '0');
  }
  cout << s;
  return 0;
}
