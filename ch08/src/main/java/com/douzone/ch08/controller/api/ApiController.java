package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.vo.GuestBookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	
	@ResponseBody
	@RequestMapping("/text")
	 public String text() {
		 
		 return "Text Data";
	 }
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX연습</h1><p>여깁니다 여기</p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public Object json() {
		GuestBookVo vo = new GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이");
		return vo;
	}
}
