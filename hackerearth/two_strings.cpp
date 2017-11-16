// Problem #14
// https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/two-strings-4/

#include <bits/stdc++.h>
typedef long long int lli;
using namespace std;

int main(int argc, char const *argv[]) {
  lli t;
  cin >> t;
  string s1, s2;
  while (t--) {
    int alpha1[26] = {0};
    int alpha2[26] = {0};
    cin >> s1 >> s2;
    for (size_t i = 0; i < s1.size(); i++) {
      alpha1[s1[i] - 'a']++;
      alpha2[s2[i] - 'a']++;
    }
    int flag = 0;
    for (size_t i = 0; i < 26; i++) {
      if (alpha2[i] != alpha1[i]) {
        flag = 1;
        break;
      }
    }
    cout << ((!flag) ? "YES" : "NO") << '\n';
  }
  return 0;
}
