x = [0: 1/7:1];
for i = 1:9
    alpha = i;
    beta = 5;
    Y = betapdf(x, alpha, beta);
    Y = Y / sum(Y);
    disp(i)
    disp(Y)
end
%plot(x,Y)