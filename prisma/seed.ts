import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CreationDate = new Date('2022-12-31T03:00:00.000')

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'

const forthHabitId = '3b16a032-6ce0-4e83-a504-4d33948b93ed'

const fifthHabitId = '832edb09-16c0-4826-b730-99c63ddd611c'

const sixthHabitId = '966777ec-1acb-49ce-9f3c-d4e93a0efd31'

const seventhHabitId = '0b882f62-9306-455d-9374-bce44b9c8aef'

async function run() {
  await prisma.habitWeekDays.deleteMany()
  await prisma.dayHabit.deleteMany()
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  
  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Beber 2L água',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Exercitar',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: forthHabitId,
        title: 'Estudar',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fifthHabitId,
        title: 'Programar',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),
    
    prisma.habit.create({
      data: {
        id: sixthHabitId,
        title: 'Ler livro',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),
    
    prisma.habit.create({
      data: {
        id: seventhHabitId,
        title: 'Criar algo',
        created_at: CreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    })
  ])

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        date: new Date('2023-01-01T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-03T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-05T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-07T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-08T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-09T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: fifthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-10T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-11T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-12T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    prisma.day.create({
      data: {
        date: new Date('2023-01-13T03:00:00.000z'),
        dayHabits: {
          create: [
          ]
        }
      }
    }),
    prisma.day.create({
      data: {
        date: new Date('2023-01-14T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-15T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-16T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-17T03:00:00.000z'),
        dayHabits: {
          create: [
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        date: new Date('2023-01-18T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-19T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-20T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-21T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-22T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
    
    prisma.day.create({
      data: {
        date: new Date('2023-01-23T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: forthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
            { habit_id: seventhHabitId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })