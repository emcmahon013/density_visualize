entry<-read.table('LIB_ENTRY.csv',header=TRUE,sep=",")
ip<-read.table('LIB_IP.csv',header=TRUE,sep=",")
colnames(ip)[1]<-"DATE"
lib<-merge(ip,entry,by=c("DATE","YEAR","MONTH","DAY","HOURS","MINS"),all=TRUE)
lib$DATE<-strptime(lib$DATE,format="%Y-%m-%dT%H:%M:%S")
lib[is.na(lib)]<-0

ggplot(lib[97:193,],aes(DATE))+geom_line(aes(y=Lehman.Library, colour='Density'))+geom_line(aes(y=MSLehmanC01,colour='Entries'))
ggplot(lib[97:193,],aes(DATE))+geom_line(aes(y=Butler, colour='Density'))+geom_line(aes(y=MSButlerC01*5,colour='Entries'))



lib$Butler.Lag[2:length(lib$Butler)]<-diff(lib$Butler)
lib$Butler.Lag[1]<-0

lib$Entries.Lag[2:length(lib$MSButlerC01)]<-diff(lib$MSButlerC01)
lib$Entries.Lag[1]<-0

ggplot(lib[97:193,],aes(DATE))+geom_line(aes(y=Butler.Lag, colour='Density'))+geom_line(aes(y=MSButlerC01,colour='Entries'))
ggplot(lib[97:193,],aes(DATE))+geom_line(aes(y=Butler.Lag, colour='Density Delta'))+geom_line(aes(y=MSButlerC01,colour='Entries'))


#TIME SERIES 

#RESIDUALS ARE DEPENDENT!
plota(lib$Butler)
plota(lib$MSButlerC01)
Box.test(lib$Butler)
Box.test(lib$MSButlerC01)
butler<=ts(lib$Butler,frequency=96)
decompose(lib$Butler)

auto.arima(lib$Butler)
auto.arima(lib$MSButlerC01)
ButlerD.fit<-Arima(lib$Butler,c(4,1,4))
ButlerE.fit<-Arima(lib$MSButlerC01,c(5,1,5))
Box.test(ButlerD.fit$residuals)
Box.test(ButlerE.fit$residuals)
Butler.fit<-cbind(ButlerD.fit$residuals,ButlerE.fit$residuals)
Butler.fit<-as.data.frame(Butler.fit)
colnames(Butler.fit)<-c('Density','Entries')
Butler.fit['DATE']<-lib['DATE']
ccf(Butler.fit$Density,Butler.fit$Entries,lag=10)
ccf(lib$Butler, lib$MSButlerC01, lag=10)
ggplot(lib[97:193,],aes(DATE))+geom_line(aes(y=Butler.Lag, colour='Density'))+geom_line(aes(y=Entries.Lag,colour='Entries'))
colnames(lib[c('Butler.Lag','Entries.Lag')])<-c('ButlerD.Lag,ButlerE.Lag')

auto.arima(lib$Uris)
auto.arima(lib$MSUrisC01)
UrisD.fit<-Arima(lib$Uris,c(1,1,5))
UrisE.fit<-Arima(lib$MSUrisC01,c(5,1,5))
Box.test(UrisD.fit$residuals)
Box.test(UrisE.fit$residuals)
Uris.fit<-cbind(UrisD.fit$residuals,UrisE.fit$residuals)
Uris.fit<-as.data.frame(Uris.fit)
colnames(Uris.fit)<-c('Density','Entries')
Uris.fit['DATE']<-lib['DATE']
ccf(Uris.fit$Density,Uris.fit$Entries,lag=10)

library(ggplot2)
library(gtable)
library(grid)



# two plots
p1 <- ggplot(lib[97:193,], aes(DATE, Butler)) + geom_line(colour = "blue") + theme_bw()
p2 <- ggplot(lib[97:193,], aes(DATE, MSButlerC01)) + geom_line(colour = "red") + theme_bw() %+replace% 
  theme(panel.background = element_rect(fill = NA))

# extract gtable
g1 <- ggplot_gtable(ggplot_build(p1))
g2 <- ggplot_gtable(ggplot_build(p2))

# overlap the panel of 2nd plot on that of 1st plot
pp <- c(subset(g1$layout, name == "panel", se = t:r))
g <- gtable_add_grob(g1, g2$grobs[[which(g2$layout$name == "panel")]], pp$t, 
                     pp$l, pp$b, pp$l)

# axis tweaks
ia <- which(g2$layout$name == "axis-l")
ga <- g2$grobs[[ia]]
ax <- ga$children[[2]]
ax$widths <- rev(ax$widths)
ax$grobs <- rev(ax$grobs)
ax$grobs[[1]]$x <- ax$grobs[[1]]$x - unit(1, "npc") + unit(0.15, "cm")
g <- gtable_add_cols(g, g2$widths[g2$layout[ia, ]$l], length(g$widths) - 1)
g <- gtable_add_grob(g, ax, pp$t, length(g$widths) - 1, pp$b)

# draw it
grid.draw(g)

