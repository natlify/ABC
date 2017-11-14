// Problem #2
// Desc : http://codeforces.com/contest/1/problem/B

#include <ctype.h>
#include <iostream>
#include <math.h>
#include <stdio.h>
#include <string.h>

using namespace std;

char a[100000][100];

int power(int a, int b) {
  int val = 1;
  while (b) {
    val *= a;
    b--;
  }
  return val;
}

char *strrev(char *str) {
  char *p1, *p2;

  if (!str || !*str)
    return str;
  for (p1 = str, p2 = str + strlen(str) - 1; p2 > p1; ++p1, --p2) {
    *p1 ^= *p2;
    *p2 ^= *p1;
    *p1 ^= *p2;
  }
  return str;
}

int column_alpha_to_num(string column_no) {
  long long int val = 0;
  int size = (int)column_no.size() - 1;
  for (int i = 0; i < (int)column_no.size(); i++) {
    val += power(26, size--) * (column_no[i] - 64);
  }
  return val;
}

string column_num_to_alpha(int column_no) {
  char c[50];
  long long int i = 0;
  while (column_no) {
    int r = ((column_no % 26) ?: 26);
    column_no = ((column_no % 26) ? column_no / 26 : (column_no / 26) - 1);
    c[i++] = (char)(r + 64);
  }
  c[i] = '\0';
  string val(strrev(c));
  return val;
}
void convert(char *input, int overload) {
  char col[100];
  int i = 0, j = 0;
  while (!isdigit(input[i])) {
    col[j++] = input[i++];
  }
  col[j] = '\0';
  string column(col);
  cout << "R";
  while (input[i]) {
    cout << input[i++];
  }
  cout << "C" << column_alpha_to_num(column) << endl;
  return;
}

void convert(char *input) {
  if (isdigit(input[1]) && input[0] == 'R') {
    char *pch;
    int flag = 0;
    for (int i = 0; i < (int)strlen(input); i++) {
      if (input[i] == 'C')
        flag++;
    }
    if (!flag) {
      convert(input, 1);
      return;
    }
    pch = strtok(input, "RC");
    long long int r_c[2], i = 0;
    while (pch != NULL) {
      r_c[i++] = atoi(pch);
      pch = strtok(NULL, "RC");
    }
    cout << column_num_to_alpha(r_c[1]) << r_c[0] << endl;
    return;
  } else {
    convert(input, 1);
  }
}

int main(int argc, char const *argv[]) {
  long int n;
  cin >> n;

  for (int i = 0; i < n; i++) {
    cin >> a[i];
  }
  for (int i = 0; i < n; i++) {
    convert(a[i]);
  }
  return 0;
}
