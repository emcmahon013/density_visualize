entry<-read.table('LIB_ENTRY.csv',header=TRUE,sep=",")
ip<-read.table('LIB_IP.csv',header=TRUE,sep=",")
colnames(ip)[1]<-"DATE"
lib<-merge(ip,entry,by=c("DATE","YEAR","MONTH","DAY","HOURS","MINS"),all=TRUE)
lib$DATE<-strptime(lib$DATE,format="%Y-%m-%dT%H:%M:%S")
lib[is.na(lib)]<-0


exitmodel<-function(x,mp) {
  y<-NULL
  for (i in 1:length(x)) {
    if (i<=4) {
      y[i]<-x[i]
    } else if (i>4 && i<=8) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]
    } else if (i>8 && i<=12) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]
    } else if (i>12 && i<=16) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]-mp[4]*x[i-12]
    } else if (i>16 && i<=20) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]-mp[4]*x[i-12]-mp[5]*x[i-16]
    } else {
      y[i]<-x[i]+y[i-1]-(mp[1]*x[i-2]+mp[2]*x[i-4]+mp[3]*x[i-8]+mp[4]*x[i-12]+mp[5]*x[i-16]+mp[6]*x[i-20])
    }  
  } 
  return(y)
}

exitmodel<-function(x,mp) {
  y<-NULL
  for (i in 1:length(x)) {
    if (i<=4) {
      y[i]<-x[i]
    } else if (i>4 && i<=8) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]
    } else if (i>8 && i<=12) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]
    } else if (i>12 && i<=16) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]-mp[4]*x[i-12]
    } else if (i>16 && i<=24) {
      y[i]<-x[i]+y[i-1]-mp[1]*x[i-2]-mp[2]*x[i-4]-mp[3]*x[i-8]-mp[4]*x[i-12]-mp[5]*x[i-16]
    } else {
      y[i]<-x[i]+y[i-1]-(mp[1]*x[i-4]+mp[2]*x[i-8]+mp[3]*x[i-12]+mp[4]*x[i-16]+mp[5]*x[i-20]+mp[6]*x[i-24])
    }  
  } 
  return(y)
}

library.est<-function(entry,density) {
  corr_list<-0
  mean_list<-0
  max_corr<-0
  mrx<-matrix(c(0.3480,0.3357,0.2062,0.0870,0.0215,0.0016,
                0.1654,0.3192,0.2942,0.1655,0.0511,0.0046, 
                0.0629,0.2426,0.3354,0.2516,0.0970,0.0105,
                0.0202,0.1561,0.3237,0.3237,0.1561,0.0202,
                0.0058,0.0892,0.2774,0.3699,0.2230,0.0347,
                0.0015,0.0467,0.2179,0.3874,0.2919,0.0545, 
                0.0004,0.0229,0.1600,0.3794,0.3573,0.0800,
                0.0001,0.0106,0.1114,0.3520,0.4145,0.1114),
              nrow=6,ncol=8)
  for (i in 1:8) {
    mp<-mrx[,i]
    lib.model<-exitmodel(entry,mp)
    bcorr<-cor(lib.model,density)
    corr_list[i]<-bcorr
    ratio<-lib.model/density
    ratio[is.infinite(ratio)]<-0
    bmean<-mean(ratio,na.rm=TRUE)
    mean_list[i]<-bmean
    if(bcorr>max_corr) {
      max_corr<-bcorr
      lib.opt<-lib.model
    }} 
  return(list(mean=mean_list,corr=corr_list,var=lib.opt))
}

butler<-library.est(lib$MSButlerC01,lib$Butler)
uris<-library.est(lib$MSUrisC01,lib$Uris)
nwc<-library.est(lib$MSNWCBC02,lib$Northwest.Corner.Building)

summary(lm(lib$MSNWCBC02 ~ lib$Northwest.Corner.Building))
summary(lm(nwc$var ~ lib$Northwest.Corner.Building))

summary(lm(lib$MSUrisC01 ~ lib$Uris))
summary(lm(uris$var ~ lib$Uris))

summary(lm(butler$var ~ lib$Butler))
summary(lm(lib$MSButlerC01 ~ lib$Butler))

ggplot(nwc.plot,aes(time))+geom_line(aes(y=nwc$corr))+xlab("Average Time from Entry")+ylab("Correlation between Entry Model and Density Data")+labs(title="Optimal Entry Model for NWC Library \nBased on Correlation with Density Data")
