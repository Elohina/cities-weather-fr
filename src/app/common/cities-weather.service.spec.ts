import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { CitiesWeatherService } from './cities-weather.service';
import { AppConfig } from '../app.config';

describe( 'CitiesWeatherService', () => {
    class MockConfig {
        static API_URL = 'https://test.com';
    }

    let mockConfig;
    beforeEach(async(() => {
        mockConfig = new MockConfig();
        TestBed.configureTestingModule({
            declarations: [],
            imports: [HttpModule],
            providers: [
                {provide: XHRBackend, useClass: MockBackend},
                {provide: AppConfig, useValue: mockConfig},
                CitiesWeatherService
            ]
        }).compileComponents();
    }));

    it('should get cities weather', inject([XHRBackend, CitiesWeatherService], (mockBackend, citiesWeatherService) => {
        const mockResponse = {
            'cnt': 4,
            'list': [
                {
                    'coord': {
                        'lon': -70.65,
                        'lat': -33.46
                    },
                    'sys': {
                        'type': 1,
                        'id': 4670,
                        'message': 0.0049,
                        'country': 'CL',
                        'sunrise': 1508665912,
                        'sunset': 1508713342
                    },
                    'weather': [
                        {
                            'id': 800,
                            'main': 'Clear',
                            'description': 'clear sky',
                            'icon': '01d'
                        }
                    ],
                    'main': {
                        'temp': 27.51,
                        'pressure': 1015,
                        'humidity': 60,
                        'temp_min': 27,
                        'temp_max': 28
                    },
                    'visibility': 10000,
                    'wind': {
                        'speed': 4.1,
                        'deg': 230
                    },
                    'clouds': {
                        'all': 0
                    },
                    'dt': 1508707462,
                    'id': 3871336,
                    'name': 'Santiago'
                },
                {
                    'coord': {
                        'lon': -77.03,
                        'lat': -12.04
                    },
                    'sys': {
                        'type': 0,
                        'id': 0,
                        'message': 0.1571,
                        'country': 'PE',
                        'sunrise': 1508668738,
                        'sunset': 1508713556
                    },
                    'weather': [
                        {
                            'id': 800,
                            'main': 'Clear',
                            'description': 'clear sky',
                            'icon': '02d'
                        }
                    ],
                    'main': {
                        'temp': 19.94,
                        'pressure': 876.82,
                        'humidity': 70,
                        'temp_min': 19.94,
                        'temp_max': 19.94,
                        'sea_level': 1024.13,
                        'grnd_level': 876.82
                    },
                    'wind': {
                        'speed': 1.16,
                        'deg': 209.5
                    },
                    'clouds': {
                        'all': 8
                    },
                    'dt': 1508707462,
                    'id': 3936456,
                    'name': 'Lima'
                },
                {
                    'coord': {
                        'lon': -58.38,
                        'lat': -34.61
                    },
                    'sys': {
                        'type': 1,
                        'id': 4685,
                        'message': 0.18,
                        'country': 'AR',
                        'sunrise': 1508662884,
                        'sunset': 1508710483
                    },
                    'weather': [
                        {
                            'id': 800,
                            'main': 'Clear',
                            'description': 'clear sky',
                            'icon': '01d'
                        }
                    ],
                    'main': {
                        'temp': 16.98,
                        'pressure': 1022,
                        'humidity': 34,
                        'temp_min': 16,
                        'temp_max': 18
                    },
                    'visibility': 10000,
                    'wind': {
                        'speed': 1.5
                    },
                    'clouds': {
                        'all': 0
                    },
                    'dt': 1508707462,
                    'id': 3435910,
                    'name': 'Buenos Aires'
                },
                {
                    'coord': {
                        'lon': -46.64,
                        'lat': -23.55
                    },
                    'sys': {
                        'type': 1,
                        'id': 4541,
                        'message': 0.1595,
                        'country': 'BR',
                        'sunrise': 1508660809,
                        'sunset': 1508706909
                    },
                    'weather': [
                        {
                            'id': 500,
                            'main': 'Rain',
                            'description': 'light rain',
                            'icon': '10d'
                        }
                    ],
                    'main': {
                        'temp': 20.54,
                        'pressure': 1018,
                        'humidity': 82,
                        'temp_min': 20,
                        'temp_max': 22
                    },
                    'visibility': 7000,
                    'wind': {
                        'speed': 3.6,
                        'deg': 290
                    },
                    'clouds': {
                        'all': 75
                    },
                    'dt': 1508707462,
                    'id': 3448439,
                    'name': 'Sao Paulo'
                }
            ]
        };

        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });

        citiesWeatherService.getWeatherCities().subscribe(
            (data: any) => {
                const cities = data.json();
                expect(cities).not.toBe(null);
                expect(cities.list.length).toBe(4);
                expect(cities.list[0].name).toEqual('Santiago');
            }
        );
    }));
});

