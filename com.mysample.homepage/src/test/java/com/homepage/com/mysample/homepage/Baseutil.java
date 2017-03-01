package com.homepage.com.mysample.homepage;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Baseutil {
	
	public static void main(String args[]) throws IOException
	{
	Properties prop=new Properties();
	String fileUrl="D:\\TestNg\\com.mysample.homepage\\src\\test\\java\\com\\homepage\\com\\mysample\\homepage\\TestConfig.properties";
	FileInputStream inputStream = new FileInputStream(fileUrl);
    if(inputStream!=null)
    {
    	prop.load(inputStream);
    	String test=prop.getProperty("url");
    	System.out.print(test);
    }
    else
    {
    	System.out.print("Filenotfout");
    }
}
}