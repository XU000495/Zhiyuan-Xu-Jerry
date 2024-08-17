package com.laioffer.twitch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
@EnableCaching
public class TwitchApplication {
	public static void main(String[] args) {
		SpringApplication.run(TwitchApplication.class, args);
	}
}

//Zoom这种视频通话的用的不是rest API.
//Twitch已经被Amazon收购，主要直播打游戏，相当于国内的虎牙，斗鱼，bilibili

//Postman:http://localhost.8080/hello?game_id=123&startedat=2021
//请求名称用?和&链接，建议去复习CSCI 4131, Internet programming.
//Postman:https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow

//常用的AWS Elastic search service: EC2, EXS, ECS, App runner
