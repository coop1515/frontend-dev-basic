package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.dto.JSONResult;
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
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JSONResult json() {
		GuestBookVo vo = new GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이");
		
		return JSONResult.success(vo);
//		return JSONResult.fail("error.....");
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public JSONResult post01(GuestBookVo vo) {
		System.out.println(vo);
		
		// service -> repository: DB insert 성공 후,
		vo.setNo(1L);

		return JSONResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public JSONResult post02(@RequestBody GuestBookVo vo) {
		System.out.println(vo);
		// service -> repository: DB insert 성공 후,
		vo.setNo(2L);

		return JSONResult.success(vo);
	}
}