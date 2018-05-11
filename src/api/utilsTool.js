export const toChinese = (num) => {
	var digit = '零壹贰叁肆伍陆柒捌玖',
		unit = '万仟佰拾亿仟佰拾万仟佰拾元角分',
		disNum,
		strNum,
		moneyChinese = '',
		i,
		j,
		chGigit,
		chUnit,
		nZero = 0;
	num = Math.abs(num).toFixed(2);
	strNum = (num * 100).toFixed(0).toString();
	j = strNum.length;
	if (j > 15){return '溢出';} 
	unit = unit.substr(15-j);
	for(i=0;i<j;i++){ 
		disNum = strNum.substr(i,1);
		if (i != (j-3) && i != (j-7) && i != (j-11) && i != (j-15)){
			if (disNum == '0'){ 
				chGigit = ''; 
				chUnit = ''; 
				nZero = nZero + 1; 
			}else{ 
				if(disNum != '0' && nZero != 0){ 
					chGigit = '零' + digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				}else{ 
					chGigit = digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				} 
			} 
		}else{
			if (disNum != '0' && nZero != 0){ 
				chGigit = "零" + digit.substr(disNum*1,1); 
				chUnit = unit.substr(i,1); 
				nZero = 0; 
			}else{ 
				if(disNum != '0' && nZero == 0){ 
					chGigit = digit.substr(disNum*1,1); 
					chUnit = unit.substr(i,1); 
					nZero = 0; 
				}else{ 
					if (disNum == '0' && nZero >= 3){ 
						chGigit = ''; 
						chUnit = ''; 
						nZero = nZero + 1; 
					} 
					else{ 
						if (j >= 11){ 
							chGigit = ''; 
							nZero = nZero + 1; 
						} 
						else{ 
							chGigit = ''; 
							chUnit = unit.substr(i,1); 
							nZero = nZero + 1; 
						} 
					} 
				} 
			} 
		} 
		if (i == (j-11) || i == (j-3)){
			chUnit = unit.substr(i,1); 
		} 
		moneyChinese = moneyChinese + chGigit + chUnit;
		if (i == j-1 && disNum == '0' ){
			moneyChinese = moneyChinese + '整'; 
		} 
	} 
	if (num == 0){ 
		moneyChinese = '零元整'; 
	} 
	return moneyChinese; 
};
