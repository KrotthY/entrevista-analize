# Generated by Django 4.1 on 2022-08-31 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Auto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marca', models.CharField(max_length=50)),
                ('modelo', models.CharField(max_length=100)),
                ('precio', models.IntegerField()),
                ('color', models.TextField()),
                ('descripcion', models.TextField()),
            ],
        ),
    ]
