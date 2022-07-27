import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { Skill } from './skill';
import { Detail } from './detail';
import { WorkCard } from './work-card/work-card';

import { ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [
    new Skill('assets/eye-logo.png', 'Computer Vision',
        'I am passionate of developing programs that can extract information from images and allow the computer to "see"',
        [new Detail('Problems I enjoy solving:', ['Classification, Semantic segmentation, Object Detection, Anomaly Detection and Segmentation, ...']),
               new Detail('Technologies I use:', ['Python', 'OpenCV', 'Tensorflow & Keras', 'Docker'])],
        '#computer-vision'),

    new Skill('assets/internet-icon.png', 'FullStack Developer',
        'I like making beautiful web applications that helps people solving their problems',
        [new Detail('Languages I use', ['HTML, CSS, Javascript, Typescript, Python, Java']),
          new Detail('Frameworks I use:', ['Angular', 'SpringBoot', 'Flask', 'Django'])],
        '#web-developer'),

    new Skill('assets/teach-icon.png', 'Mentor',
        'I am concerned about people and love helping others achieve their goals',
        [new Detail('Fields of knowledge I teach:', ['Bots, Web Extensions, Computer Vision']),
          new Detail('Mentor stats:', ['1 year experience', '3 courses', '+200 students', '+20h recorded classes'])],
        "https://www.udemy.com/user/daniel-del-rio-6/"),
  ];

  computerVisionWorks: WorkCard[] = [
    new WorkCard('Semantic Segmentation', 'Get the class of each pixel of an image', '', 'Check it!', 'assets/computer-vision/gifs/semantic-segmentation.gif'),
    new WorkCard('Object Detection', 'Detect multiple objects on an image', '', 'Check it!', 'assets/computer-vision/gifs/object-detection-compressed.mp4'),
    new WorkCard('Landmark detection', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/landmark-detection-compressed.mp4'),
    new WorkCard('Anomaly Detection & Segmentation', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/anomaly-segmentation.png'),
    new WorkCard('Tracking', 'Detect and track objects during a video', '', 'Check it!', 'assets/computer-vision/gifs/tracking-compressed.mp4'),
    new WorkCard('Semantic Segmentation', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/landmark-detection-compressed.mp4')
  ]

  webWorks: WorkCard[] = [
    new WorkCard('ApuntesUSC', 'Plataforma web para compartir apuntes entre los estudiantes', 'https://apuntesusc.es', 'Visit website', 'assets/fullstack-dev/gifs/apuntesusc.gif'),
    new WorkCard('Object Detection', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/object-detection-compressed.mp4'),
    new WorkCard('Landmark detection', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/landmark-detection-compressed.mp4'),
    new WorkCard('Anomaly Detection & Segmentation', 'Bla bla bla', 'Check it!', '', 'assets/computer-vision/gifs/anomaly-segmentation.png'),
    new WorkCard('Semantic Segmentation', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/object-detection-compressed.mp4'),
    new WorkCard('Semantic Segmentation', 'Bla bla bla', '', 'Check it!', 'assets/computer-vision/gifs/landmark-detection-compressed.mp4')
  ]

  constructor( private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
    fpsLimit: 75,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse
        },
        onHover: {
          enable: true,
          mode: HoverMode.bubble
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#a5a5a5"
      },
      links: {
        color: "#a5a5a5",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 2
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 3,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 100
      },
      opacity: {
        value: 0.1
      },
      shape: {
        type: "image",
        stroke:{
          width: 0,
          color: "#a5a5a5"
        },
        polygon:{
          nb_sides: 5
        },
        image:{
          src:"assets/favicon.png",
          width: 32,
          height: 32
        }
      },
      size: {
        value: {min: 2, max: 10 },
      }
    },
    detectRetina: true
  };

  @ViewChild('particle', { read: ElementRef }) particleElement: ElementRef<HTMLElement> | undefined;



  ngAfterViewInit(): void {
  }

  particlesLoaded(container: Container): void {
    console.log(container);
    if(this.particleElement != null){
      const parentElement = this.particleElement.nativeElement;
      const element = parentElement.querySelector("canvas");
      if(element != null){
        this.renderer.setStyle(element, 'position', 'absolute', RendererStyleFlags2.Important)
        this.renderer.setStyle(element, 'z-index', '-1', RendererStyleFlags2.Important)
      }
    }
    console.log(this.particleElement)
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

}
