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
    new Skill('assets/eye-logo.png', 'section3.computer-vision.title',
        'section3.computer-vision.description',
        [new Detail('section3.computer-vision.problems.title', ['Classification, Semantic segmentation, Object Detection, Anomaly Detection and Segmentation, ...']),
               new Detail('section3.computer-vision.technologies.title', ['Python', 'OpenCV', 'Tensorflow & Keras', 'Docker'])],
        '#computer-vision'),

    new Skill('assets/internet-icon.png', 'section3.full-stack.title',
        'section3.full-stack.description',
        [new Detail('section3.full-stack.languages.title', ['HTML, CSS, Javascript, Typescript, Python, Java']),
          new Detail('section3.full-stack.frameworks.title', ['Angular', 'SpringBoot', 'Flask', 'Django'])],
        '#web-developer'),

    new Skill('assets/teach-icon.png', 'section3.mentor.title',
        'section3.mentor.description',
        [new Detail('section3.mentor.fields.title', ['section3.mentor.fields.value']),
          new Detail('section3.mentor.stats.title', ['section3.mentor.stats.value.exp',
            'section3.mentor.stats.value.courses', 'section3.mentor.stats.value.students', 'section3.mentor.stats.value.length'])],
        "https://www.udemy.com/user/daniel-del-rio-6/"),
  ];

  computerVisionWorks: WorkCard[] = [
    new WorkCard('section4.semantic-segmentation.title', 'section4.semantic-segmentation.description', '', 'common.check-it', 'assets/computer-vision/gifs/semantic-segmentation-compressed.mp4'),
    new WorkCard('section4.object-detection.title', 'section4.object-detection.description', '', 'common.check-it', 'assets/computer-vision/gifs/object-detection-compressed.mp4'),
    new WorkCard('section4.landmark-detection.title', 'section4.landmark-detection.description', '', 'common.check-it', 'assets/computer-vision/gifs/landmark-detection-compressed.mp4'),
    new WorkCard('section4.anomaly-detection.title', 'section4.anomaly-detection.description', '', 'common.check-it', 'assets/computer-vision/gifs/anomaly-segmentation.png'),
    new WorkCard('section4.tracking.title', 'section4.tracking.description', '', 'common.check-it', 'assets/computer-vision/gifs/tracking-compressed.mp4'),
    new WorkCard('section4.multitask.title', 'section4.multitask.description', '', 'common.check-it', 'assets/computer-vision/gifs/multitask-compressed.mp4'),
  ]

  webWorks: WorkCard[] = [
    new WorkCard('section5.hipoges.title', 'section5.hipoges.description', '', 'common.check-it', 'assets/fullstack-dev/gifs/real_estate.jpg'),
    new WorkCard('section5.mar2.title', 'section5.mar2.description', 'https://www.linkedin.com/feed/update/urn:li:activity:6864849626965532672/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6864849626965532672%29', 'common.check-it', 'assets/fullstack-dev/gifs/mar-2.jpg'),
    new WorkCard('section5.cui.title', 'section5.cui.description', '', 'common.check-it', 'assets/fullstack-dev/gifs/centro-mision.jpg'),
    new WorkCard('section5.huter.title', 'section5.huter.description', 'https://huter-hca.eu/', 'common.check-it', 'assets/fullstack-dev/gifs/huter.jpg'),
    new WorkCard('section5.apuntesusc.title', 'section5.apuntesusc.description', '', 'common.visit-website', 'assets/fullstack-dev/gifs/apuntesusc-compressed.mp4'),
    new WorkCard('section5.vaccine-covid.title', 'section5.vaccine-covid.description', '', 'common.check-it', 'assets/fullstack-dev/gifs/vaccine-covid.jpeg'),
    ];

  constructor( private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.attract
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.2
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
        enable: false
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 2,
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
