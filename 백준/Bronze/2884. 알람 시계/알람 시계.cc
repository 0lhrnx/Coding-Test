#include <stdio.h>

int main()
{
    int h, m;

    scanf("%d %d", &h, &m);

    m -= 45;

    if (m >= 0)
        printf("%d %d", h, m);
    else
    {
        m += 60;
        h -= 1;
        if (h >= 0)
            printf("%d %d", h, m);
        else
        {
            h += 24;
            printf("%d %d", h, m);
        }
    }

    return 0;
}
